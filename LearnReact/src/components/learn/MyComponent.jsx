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
  //================Dữ liệu nguyên thủy
  // const hieund1775 = "eric"; //string
  // const hieund1775 = 25; //number
  // {value} là lấy được giá trị
  // const hieund1775 = true;//boolean ==> không in ra giá trị
  // const hieund1775 = undefined; ==> cũng không in được
  // const hieund1775 = null; cũng không in được
  //==================
  // const hieund1775 = [1, 2, 3];Array
  const hieund1775 = {
    name: "hieune",
    age: 25,
  };

  //object không in được chỉ in được khi định nghĩa string/number

  return (
    <>
      //fragment: chỉ trả ra phần chỉ duy nhất cho phần tử fragment
      <div> {JSON.stringify(hieund1775)} */ & me</div> //tag
      <div>{console.log("ERIC")}</div>
      {/* có thể viết code JSX bên trong html {} */}
      <div className="child" style={{ borderRadius: "10px" }}>
        {/* 
        {}
        dấu nháy kép đầu tượng trưng cho sử dụng JS cho HTML
        dấu nháy kép 2 là tượng trưng cho object*/}
        child
      </div>
    </>
  );
};
export default MyComponent;
// jsx không phân biệt double int float,...
//==> tất cả đều quy về number
//dự liệu nguyên thủy: string, numbear, boolean, undefined, null
//dữ liệu object(array)
