import axios from "axios";
import { useState, useRef } from "react";

const AddEmployeeForm = ({ setInitFunc }) => {
    const typeOfEmployeeRef = useRef();
    const [error, setError] = useState({
        name: "",
        times: "",
        supervise_ID: "",
        branch_ID: "",
        salary: "",
        email: "",
        password: ""
    });
    return (
        <form className="w-full bg-White flex flex-col items-center gap-4"
            onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const employee =
                {
                    email: form.Email.value,
                    password: form.Password.value,
                    first_name: form.FName.value,
                    last_name: form.LName.value,
                    StartTime: form.Stime.value,
                    EndTime: form.Etime.value,
                    TypeofEmployee: form.Typeofemployee.value,
                    Supervise_ID: Number.parseInt(form.SupervisorID.value) === NaN ? null : Number.parseInt(form.SupervisorID.value),
                    Branch_ID: form.BranchID.value,
                    salary: form.Salary.value,
                }
                const validate =
                    await axios.post("http://localhost:3000/employee/insert", employee);
                setInitFunc("Access Employees")
            }}

        >
            <span className="material-symbols-outlined ml-auto mr-4 cursor-pointer"
                onClick={() => { setInitFunc("Access Employees") }}>
                close
            </span>
            <h1 className="h1">Add Employee</h1>
            <div id="EmployeeName" className="flex flex-col gap-1">
                <div className="flex gap-4">
                    <input
                        type="text"
                        id="FName"
                        className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none "
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        id="LName"
                        className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
                        placeholder="Last Name"
                    />
                    <label
                        className={`${error.name ? "block" : "hidden"} text-RedPrimary small`}
                        htmlFor="EmployeeName">
                        {error.name}
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    id="Email"
                    autoComplete="off"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Employee's Email Address"
                />
                <label
                    className={`${error.email ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Email">
                    {error.email}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="password"
                    id="Password"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Employee's Password"
                />
                <label
                    className={`${error.password ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Password">
                    {error.password}
                </label>
            </div>
            <div>
                <input
                    type="text"
                    id="BranchID"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Branch's ID"
                />
                <label
                    className={`${error.branch_ID ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="BranchID">
                    {error.branch_ID}
                </label>
            </div>
            <select
                className="flex max-w-[350px] justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select"
                ref={typeOfEmployeeRef}
                defaultChecked="Select Type of Employee">
                <option value="Select Type of Employee" disabled>Select Type of Employee</option>
                <option value="chief">chief</option>
                <option value="delivery">delivery</option>
                <option value="waiter">waiter</option>
            </select>
            <div>
                <input
                    type="text"
                    id="SupervisorID"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Employee's supervisor Id (optional)"
                />
                <label
                    className={`${error.supervise_ID ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="SupervisorID">
                    {error.supervise_ID}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="text"
                    id="Salary"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Employee's salary"
                />
                <label
                    className={`${error.salary ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Salary">
                    {error.salary}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <div id="Times" className="flex gap-4">
                    <input
                        type="text"
                        id="Stime"
                        className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
                        placeholder="Start Time"
                    />
                    <input
                        type="text"
                        id="Etime"
                        className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
                        placeholder="End Time"
                    />
                </div>
                <label
                    className={`${error.times ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Times">
                    {error.times}
                </label>
            </div>
            <input type="submit" value="Add Employee" className="cursor-pointer btn max-w-[350px]" />
        </form>
    )
}
export default AddEmployeeForm;