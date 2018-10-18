import { DataService } from "../../services/DataService";
import {
  FilterDescriptor,
  FilterOperator,
  DynamicQuery
} from "ts-dynamic-query";
import { IUser } from "../../models/interfaces/IUser";

createFilterDescriptor();
createFilterDescriptorWithConstructorParam();
filterUserByUserId();

function createFilterDescriptor() {
  console.log("===== createFilterDescriptor start =====");
  // 默认构造
  const idFilter = new FilterDescriptor<IUser>();
  idFilter.operator = FilterOperator.EQUAL;
  idFilter.propertyPath = "id";
  idFilter.value = 10;
  console.log(idFilter);
  console.log("===== createFilterDescriptor end =====");
}

// 使用构造函数传参创建 FilterDescriptor (推荐)
function createFilterDescriptorWithConstructorParam() {
  console.log("===== createFilterDescriptorWithConstructorParam start =====");
  const idFilter = new FilterDescriptor<IUser>({
    operator: FilterOperator.EQUAL,
    // 使用泛型限定 propertyPath
    propertyPath: "id",
    value: 10
  });

  console.log(idFilter);
  console.log("===== createFilterDescriptorWithConstructorParam end =====");
}

function filterUserByUserId() {
  console.log("===== filterUserByUserId start =====");
  const idFilter = new FilterDescriptor<IUser>({
    operator: FilterOperator.EQUAL,
    // 使用泛型限定 propertyPath
    propertyPath: "id",
    value: 10
  });

  const query = DynamicQuery.createInstance<IUser>().addFilters([idFilter]);
  const users = DataService.getUsers();
  const result = query.query(users);

  console.log("user: ", result);
  console.log("===== filterUserByUserId end =====");
}
