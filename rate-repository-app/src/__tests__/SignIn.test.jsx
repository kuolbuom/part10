import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { useFormik } from "formik";
import SignInForm from "../components/SignInForm";

describe("SignInForm", () => {
  it("calls onSubmit with correct arguments when valid form is submitted", async () => {
    const onSubmit = jest.fn();

    const TestForm = () => {
      const formik = useFormik({
        initialValues: {
          username: "",
          password: "",
        },
        onSubmit,
      });

      const getInputBorderColor = () => "black";

      const styles = {
        input: {},
        button: {},
        buttonText: {},
      };

      return (
        <SignInForm
          styles={styles}
          formik={formik}
          getInputBorderColor={getInputBorderColor}
        />
      );
    };

    await render(<TestForm />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByText("Sign in");

    await fireEvent.changeText(usernameInput, "kalle");
    await fireEvent.changeText(passwordInput, "password");
    await fireEvent.press(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "kalle",
        password: "password",
      });
    });
  });
});
