import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";
const Provider = () => {
    const donationRef = useRef()
    const [Branches, setBranches] = useState([]);
    const [selectedLocationBranch, setselectedLocationBranch] = useState("");
    const [Donations, setDonations] = useState(0);
    const GetBranches = async (e) => {
        try {
            // get the the routes for Branches
            const res = await axios.get(
                "http://localhost:3000/branch/GetBranches"
            );
            console.log(res.data);
            setBranches(res.data);
        } catch (err) {
            console.log(err);
            console.log("error yastaaaaa");
        }
    };
    const CheckOutToProvide = async (e) => {
        // proceed to check out
        setselectedLocationBranch(e.target.value);
        setDonations(Number(donationRef.current.value));
        const Donationsobj = {
            branchlocation: selectedLocationBranch,
            email: JSON.parse(localStorage.getItem("user")).email,
            amount: Donations,
        };
        try {
            const res = await axios.post(
                "http://localhost:3000/provider/AddDonations", Donationsobj
            );
            console.log(res);
        } catch (err) {
            console.log(err);
            console.log("error yastaaaaa");
        }
    }
    useEffect(() => {
        GetBranches();
    }, []);
    return (
        <div className="w-1/4 m-auto">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a Branch to Provide</label>
            <select
                onChange={(e) => {
                    setselectedLocationBranch(e.target.value);
                }}
                id="countries" class="flex  justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select">
                <option selected>Choose a Branch</option>
                {Branches.map((key, index) => (
                    <option key={key.loaction}>{key.loaction}</option>
                ))}
            </select>
            <div class="my-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Money
                </label>
                <input ref={donationRef}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Enter Amount of Money" />
            </div>
            <button onClick={CheckOutToProvide} className="btn">Proceed to provide the branch</button>
        </div>
    );
}
export default Provider;
