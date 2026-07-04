const TodoData = (props) => {
  // props là một object {}
  // {
  //   name: "Eric",
  //   age: 25,
  //   data:{}
  // }
  // Object destructuring": học cú pháp này
  // khai báo như sau:
  const { name, age, data } = props;
  // ==========
  // cách code của beginer
  // const name = props.name;
  // const age = props.age;
  // const data = props.data;

  console.log(">>>> check props: ", props);
  return (
    <div className="todo-data">
      <div>My name is {props.name}</div>
      {/* lấy data từ component cha để sử dụng */}
      <div>Learning React</div>
      <div>Watching Youtube</div>
    </div>
  );
};
export default TodoData;
