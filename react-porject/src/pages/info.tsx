import { useState } from "react";
import "./pages.css";
import { useFormProviderContext } from "../context/formContext";

// first list
const Info = () => {
  const { formData, handleChange, handleSelectedGender } =
    useFormProviderContext();

  const [showItems, setShowItems] = useState(false);
  // const [selectedGender, setSelectedGender] = useState<string | undefined>(
  //   undefined
  // );
  const handleSelectGender = (gender: string) => {
    // setSelectedGender(gender);
    handleSelectedGender(gender);
    setShowItems(false);
  };

  return (
    <div className="info-page">
      <div className="info-box">
        <h1>User Info</h1>
        <div className="info-div">
          <h4 className="mt-[18px]">Name :</h4>
          <input
            required
            maxLength={10}
            name="name"
            onChange={handleChange}
            value={formData.name ?? ""}
            type="text"
            placeholder="write your name ..."
            className="h-[33px] w-[250px] mt-[13px] ml-[5px] border-[none] rounded text-black"
          />
          <div className="mt-[22px] text-xs ml-[-34px] text-counter mr-[10px]">
            {formData.name.length}/10
          </div>
        </div>
        <div className="info-div">
          <h4 className="mt-[18px]">last Name :</h4>
          <input
            maxLength={20}
            onChange={handleChange}
            value={formData.lastname ?? ""}
            name="lastname"
            type="text"
            placeholder="write your last name ..."
            className="h-[33px] w-[250px] mt-[13px] ml-[5px] border-[none] rounded text-black"
            required
          />
          <div className="mt-[22px] text-xs ml-[-34px] text-counter mr-[10px]">
            {formData.lastname.length}/20
          </div>
        </div>
        <div className="info-div">
          <h4 className="mt-[18px]">Age :</h4>
          <div>
            <input
              required
              onChange={handleChange}
              value={formData.age ?? ""}
              name="age"
              type="number"
              placeholder="write your Age ..."
              className="h-[33px] w-[250px] mt-[13px] ml-[5px] border-[none] rounded text-black"
            />
            {/* <div>{!formData.age ? "Riquerd" : ""}</div> */}
          </div>
        </div>
        <div className="gender-div">
          <h4 className="mt-[18px]" style={{ textAlign: "left" }}>
            Gender :
          </h4>
          <div style={{ display: "grid" }}>
            <div className="gender">
              <p
                className="select-div"
                onClick={() => setShowItems(!showItems)}
              >
                {formData.gender ? formData.gender : "select gender"}
              </p>
            </div>
            {showItems && (
              <div className="gender-select">
                <div style={{ height: "5px" }}>
                  <p
                    style={{
                      marginTop: "0px",
                      border: "1px solid rgb(11, 11, 11)",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSelectGender("male")}
                  >
                    male
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "black",
                      border: "1px solid rgb(11, 11, 11)",
                      marginTop: "19px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSelectGender("female")}
                  >
                    female
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
