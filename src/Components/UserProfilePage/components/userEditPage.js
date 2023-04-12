import { useEffect, useState } from "react";
import { getUserInfo, updateUserInfo } from "../services";

const ProfileEdit = () => {
  const [userInfo, setUserInfo] = useState();
  const [name, setName] = useState(userInfo?.name);
  const [email, setEmail] = useState(userInfo?.email);
  const [address, setAddress] = useState(userInfo?.address);
  const [loading, setIsLoading] = useState();

  console.log({ userInfo });
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = userInfo?.id;
    const body = {
      id: id,
      name: name,
      email: email,
      address: address,
    };
    updateUserInfo(setIsLoading, body, id);
    setName("");
    setEmail("");
    setAddress("");
  };

  useEffect(() => {
    const body = {
      email: "test@email.com",
    };
    getUserInfo(setUserInfo, setIsLoading, body);
  }, []);

  return (
    <div className="container mx-auto pb-8">
      <h1 className="text-2xl font-bold py-8">Edit your Profile Info</h1>
      <form className="sm:w-1/2 m-auto bg-white" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none hover:scale-106 border-[1px] border-solid focus:border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border focus:border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="shadow appearance-none border focus:border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            placeholder="address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
