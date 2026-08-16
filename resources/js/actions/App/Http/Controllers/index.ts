import HomePageIndexController from './HomePageIndexController'
import EmployeeController from './EmployeeController'
const Controllers = {
    HomePageIndexController: Object.assign(HomePageIndexController, HomePageIndexController),
EmployeeController: Object.assign(EmployeeController, EmployeeController),
}

export default Controllers