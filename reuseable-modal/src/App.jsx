import "./App.css";
import Modal from "./components/Modal/Modal";
import { openModal } from "./components/Modal/Modal";

function App() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[2.5rem] text-center text-white mb-5 font-semibold">
          Reuseable Modal in React + vite
        </h1>

        <button
          onClick={() => openModal("login-modal")}
          className="bg-[#1c64f2] py-2 px-4 rounded text-xl text-white mr-4"
        >
          open login modal
        </button>
        <button
          onClick={() => openModal("product-modal")}
          className="bg-[#1c64f2] py-2 px-4 rounded text-xl text-white "
        >
          open product modal
        </button>
      </div>

      <Modal id="login-modal">
        <h1 className="text-2xl font-semibold mb-7 text-white">Login</h1>
        <form className="w-[450px]">
          <div className="mb-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="w-full text-white py-2 px-4 rounded text-[16px] bg-[#1c64f2]">
            Login to your account
          </button>
        </form>
      </Modal>

      <Modal id="product-modal">
        <h1 className="text-2xl font-semibold mb-7 text-white">
          Add a Product
        </h1>
        <form className="w-[1024px]">
          <div className="mb-5 flex items-center justify-between gap-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="text"
              placeholder="Product Name"
            />
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="text"
              placeholder="Product Slug"
            />
          </div>
          <div className="mb-5 flex items-center justify-between gap-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="text"
              placeholder="Quantity"
            />
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="text"
              placeholder="Stock in"
            />
          </div>
          <div className="mb-5 flex items-center justify-between gap-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="text"
              placeholder="Price"
            />
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="text"
              placeholder="Short Description"
            />
          </div>
          <div className="mb-5 flex items-center justify-between gap-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="text"
              placeholder="Category"
            />
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="text"
              placeholder="Color"
            />
          </div>

          <button className=" text-white py-2 px-4 rounded text-[16px] bg-[#1c64f2]">
            Add a Product
          </button>
        </form>
      </Modal>
    </>
  );
}

export default App;
