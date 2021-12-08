import React, { useState, useEffect } from "react";
import { Modal, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectBox from "react-native-multi-selectbox";

// * CONTEXT IMPORT
import { useAuth } from "../../context/AuthContext";
import { useGroup } from "../../context/GroupContext";

// * COMPONENTS IMPORT
import CustomText from "../../components/general/CustomText";
import CustomButton from "../../components/general/CustomButton";

// * STYLES IMPORT
import addExpenseStyle from "./addExpenseStyle";
import { palette } from "../../styles/theme";

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
  }, [submitted]);

  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={addExpenseStyle.modalContainer}>
        <CustomText
          title="Add Expense"
          h2
          style={{ textAlign: "center", marginBottom: 10 }}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={addExpenseStyle.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Add Title"
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
              style={addExpenseStyle.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
              placeholder="Add Cost"
            />
          )}
          name="totalCost"
          defaultValue=""
        />
        {errors.totalCost && <Text>Cost is required.</Text>}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          <CustomText title="Choose a date: " p />

          <DateTimePicker
            minimumDate={new Date(1901, 0, 1)}
            maximumDate={new Date()}
            value={date}
            mode="date"
            display="default"
            onChange={(event, value) => {
              datePickerHandler(value);
            }}
            style={{ width: 250 }}
          />
        </View>

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
              containerStyle={addExpenseStyle.selectBox}
              labelStyle={addExpenseStyle.label}
              arrowIconColor="black"
              searchIconColor="black"
              toggleIconColor="black"
              multiListEmptyLabelStyle={addExpenseStyle.font}
              optionsLabelStyle={addExpenseStyle.font}
              hideInputFilter={true}
              optionContainerStyle={addExpenseStyle.optionContainer}
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
                label={`Who is sharing the cost with ${whoPaid.item}?`}
                options={usersForMultiSelect}
                selectedValues={assignedUsers}
                onMultiSelect={onMultiChange()}
                onTapClose={onMultiChange()}
                isMulti
                containerStyle={addExpenseStyle.selectBox}
                labelStyle={addExpenseStyle.label}
                arrowIconColor="black"
                searchIconColor="black"
                toggleIconColor="black"
                multiListEmptyLabelStyle={addExpenseStyle.font}
                optionsLabelStyle={addExpenseStyle.font}
                hideInputFilter={true}
                optionContainerStyle={addExpenseStyle.optionContainer}
                multiOptionContainerStyle={{backgroundColor: palette.highlight}}
                multiListEmptyLabelStyle={addExpenseStyle.multi}
              />
            )}
            name="assignedUsers"
            defaultValue=""
          />
        ) : null}
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            title="Submit"
            style={{ marginTop: 20 }}
          />
          <CustomButton
            onPress={() => setModalVisible(false)}
            title="Cancel"
            style={{ marginTop: 20 }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddExpense;
