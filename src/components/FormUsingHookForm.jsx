import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp = z
  .object({
    email: z.string().email({ message: "Please add valid email" }),
    password: z
      .string()
      .min(8, { message: "Password Length should be minimum 8 characters." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password should equal to Confirm Password" }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        message: "Confirm password should be equal to password.",
      });
    }
  });

const post = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

function FormUsingHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SignUp),
  });

  const onSubmit = (data) => {
    console.log("data=>", data);
    post(data).then(() => {
      console.log("Form submitted Successfully");
      reset();
    });
  };

  return (
    <div className="flex flex-col">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-20"
      >
        <input
          placeholder="Email"
          type="email"
          className="border p-3 text-xl my-2"
          {...register("email")}
        />
        {errors["email"] ? (
          <span className="text-red-600">{errors["email"].message}</span>
        ) : null}

        <input
          type="password"
          placeholder="Password"
          className="border p-3 text-xl my-2"
          {...register("password")}
        />
        {errors["password"] ? (
          <span className="text-red-600">{errors["password"].message}</span>
        ) : null}
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-3 text-xl my-2"
          {...register("confirmPassword")}
        />
        {errors["confirmPassword"] ? (
          <span className="text-red-600">
            {errors["confirmPassword"].message}
          </span>
        ) : null}
        <input
          type="submit"
          value={isSubmitting ? "Submitting..." : "Submit"}
          className="btn bg-purple-400 p-3 rounded-md text-center text-white cursor-pointer"
        />
      </form>
    </div>
  );
}

export default FormUsingHookForm;
