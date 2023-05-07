import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function Forms() {
  const schema = yup.object().shape({
    fullName: yup.string().min(3).required(),
    age: yup.number().min(18).required("This field is required"),
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    repeatPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen">

      <form className="max-w-full space-x-4" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="" className="border border-black" {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}

        <label>Age</label>
        <input type="number" name="" className="border border-black"  {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}

        <label>Email</label>
        <input type="text" name="" className="border border-black"  {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input type="text" name="" className="border border-black"  {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <label>Repeat Password</label>
        <input type="text" name="" className="border border-black"  {...register("repeatPassword")} />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}

        <button type="submit" className="bg-green-400 text-white px-3 py-1 rounded-lg">
          Submit
        </button>
      </form>
    </div>

  )
}