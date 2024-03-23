import React from "react";
import Login from "./screens/Login";
import AdminScreen from "./screens/AdminScreen";
function App() {
  return (
    <div>
      <Login
        img={"../src/assets/Logo.png"}
        subHeading={"Sign Into Your Account"}
        title={"W E L C O M E T O FIRST CHOICE CUNSULTANCY"}
        para={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type`}
        back={"../src/assets/bgAdmin.png"}
      />
      {/* <AdminScreen
        img={"../src/assets/Logo.png"}
        subHeading={"Sign Into Your Account"}
        title={"W E L C O M E T O FIRST CHOICE CUNSULTANCY"}
        para={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type`}
        back={"../src/assets/Adminbg.png"}
      /> */}
     
    </div>
  );
}

export default App;
