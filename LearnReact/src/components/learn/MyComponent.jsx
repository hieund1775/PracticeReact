import "./style.css";
//() => {}
//component = html + css + js
const FakeComponent = () => {
  return (
    <div> FakeComponet ne</div> //tag
  );
}; //khong xuat ra duoc
//--------------------------------------
//JSX
//fragment
const MyComponent = () => {
  return (
    <>
      //fragment: chỉ trả ra phần chỉ duy nhất cho phần tử fragment
      <div> eric & me</div> //tag
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};
export default MyComponent;
