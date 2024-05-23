import "../context/formContext";
import { useFormProviderContext } from "../context/formContext";

const Confrim = () => {
  const { formData } = useFormProviderContext();
  return (
    <div className="info-page">
      <h1>User Info</h1>
      <div style={{ display: "flex" }}>
        {/* left side in confrim page */}

        <div className="confirm-div-left">
          <h4 className="text-d4">Name : {formData.name}</h4>
          <h4>LastName : {formData.lastname}</h4>
          <h4>Age : {formData.age}</h4>
          <h4>Gender : {formData.gender}</h4>
          <h4>Tiwtter : {formData.twitter}</h4>
          <h4>Discord : {formData.discord}</h4>
        </div>

        {/* right side in confrim page  */}

        <div className="confirm-div-right">
          <h4>Phone : {formData.phone}</h4>
          <h4>Instagram : {formData.instagram}</h4>
          <h4>Email : {formData.email}</h4>
          <h4>Linkdin : {formData.likdin}</h4>
          <h4>You tube : {formData.youTube}</h4>
          <h4>Adress : {formData.adrass}</h4>
        </div>
      </div>
    </div>
  );
};

export default Confrim;
