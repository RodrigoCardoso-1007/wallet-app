import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import InputFields from "../InputFields";

describe("InputFields", () => {
  describe("Check will show", () => {
    it("the component rendered placeholder", () => {
      const { getByPlaceholderText, debug } = render(
        <InputFields
          value={"value"}
          placeholder={"placeholder"}
          onChangeValue={(value) => console.log(value)}
        />
      );

      expect(getByPlaceholderText("placeholder")).toBeTruthy();
    });

    it("the component rendered title", () => {
      const { getByText, debug } = render(
        <InputFields
          value={"value"}
          title={"Title"}
          placeholder={"placeholder"}
          onChangeValue={(value) => console.log(value)}
        />
      );

      expect(getByText("Title")).toBeTruthy();
    });
  });

  describe('Check functions called', () => {
    it("the component value has ben updated", () => {
      const mock = jest.fn();
      let initialValue = 'value1';
      let expectedValue = 'value2';

      const { getByPlaceholderText} = render(
        <InputFields
          placeholder={'test'}
          value={initialValue}
          onChangeValue={mock}
        />);

      fireEvent.changeText(getByPlaceholderText('test'), expectedValue)
      expect(mock).toHaveBeenCalledWith(expectedValue)
    });
  })

});
