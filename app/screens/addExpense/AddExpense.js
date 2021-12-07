import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectBox from "react-native-multi-selectbox";

// * COMPONENTS IMPORT
import CustomText from "../../components/general/CustomText";
import Balance from "../../components/dashboard/Balance";

// * CONTEXT IMPORT
import { useAuth } from "../../context/AuthContext";
import { useGroup } from "../../context/GroupContext";
import { getDashboardData, updateGroup } from "../../hooks/apiCalls";

// * STYLES IMPORT
import generalStyles from "../../styles/generalStyles";

const AddExpense = ({ modalVisible, setModalVisible }) => {
  // Toggle state to close the modal
  const [submitted, setSubmitted] = useState(false);

  // Hooks and functions for DateTimePicker
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const datePickerHandler = (selectedDate) => {
    if (Platform.OS === "android") setIsPickerOpen(false);
    setDate(selectedDate);
  };

  const showDatePicker = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  // States to collect and save to the Group model in backend
  const [whoPaid, setWhoPaid] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  // Hooks for Forms
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Accessing objects and methods from context
  const { authData } = useAuth();
  const { groupData, setGroupData } = useGroup();

  // Functions and arrays for use with Multiselect
  const usersForSelectBox = groupData.users.map((user) => {
    return { item: `${user.firstName} ${user.lastName[0]}`, id: user._id };
  });

  const usersForMultiSelect = usersForSelectBox.filter(
    (user) => user.id !== whoPaid.id
  );

  const onSelect = () => {
    return (val) => setWhoPaid(val);
  };

  const onMultiChange = () => {
    return (item) => {
      const result = assignedUsers?.find((user) => item.id === user.id);
      if (result) {
        const tempArr = assignedUsers.filter((user) => user.id !== result.id);
        setAssignedUsers(tempArr);
      } else {
        setAssignedUsers([...assignedUsers, item]);
      }
    };
  };

  // Submit handler for Form
  const onSubmit = async (data) => {
    // Assigning data from state hooks to the object to be sent in updateGroup API call
    data.date = date;
    data.whoPaid = whoPaid.id;
    data.assignedUsers = [...assignedUsers.map((user) => user.id), whoPaid.id];
    
    const dataToSend = { expenses: data, groupID: authData.groups[0] };
    const res = await updateGroup(dataToSend);
    console.log("RESPONSE --> ", res);
    setGroupData(res);
    reset({
      expenseName: "",
      totalCost: "",
      date: "",
    });
    setSubmitted(true);
  };
  
  useEffect(() => {
    submitted && setModalVisible(false);
  }, [submitted])

  return (
    <>
      <SafeAreaView style={generalStyles.AndroidSafeArea}>
          <StatusBar barStyle="dark-content"/>
      </SafeAreaView>
      <View>
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <CustomText title="Add Expense: " h3 />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Title"
                autoCapitalize="none"
              />
            )}
            name="expenseName"
            defaultValue=""
          />
          {errors.expenseName && <Text>Name is required.</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                placeholder="Cost"
              />
            )}
            name="totalCost"
            defaultValue=""
          />
          {errors.totalCost && <Text>Cost is required.</Text>}
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                onFocus={() => showDatePicker()}
                onChangeText={onChange}
                value={date.toLocaleDateString()}
                placeholder="Date"
                onBlur={onBlur}
              />
            )}
            name="date"
            defaultValue=""
          />
          {isPickerOpen && (
            <View>
              <DateTimePicker
                minimumDate={new Date(1901, 0, 1)}
                maximumDate={new Date()}
                value={date}
                mode="date"
                display="default"
                onChange={(event, value) => {
                  datePickerHandler(value);
                  showDatePicker();
                }}
              />
            </View>
          )}
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <SelectBox
                label="Who paid?"
                options={usersForSelectBox}
                value={whoPaid}
                onChange={onSelect()}
                hideInputFilter={false}
              />
            )}
            name="whoPaid"
            defaultValue=""
          />
          {whoPaid ? (
            <Controller
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <SelectBox
                  label={`Who else is sharing the cost with ${whoPaid.item}?`}
                  options={usersForMultiSelect}
                  selectedValues={assignedUsers}
                  onMultiSelect={onMultiChange()}
                  onTapClose={onMultiChange()}
                  isMulti
                />
              )}
              name="assignedUsers"
              defaultValue=""
            />
          ) : null}
          <Button title="Submit Expense" onPress={handleSubmit(onSubmit)} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </Modal>
      </View>
    </>
  );
};

export default AddExpense;
