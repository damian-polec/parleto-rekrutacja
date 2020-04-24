import Vue from "vue";
import Vuex from "vuex";
import employees from "../data/data";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
    filteredEmployees: [],
    sections: [],
    totalSalaries: null,
    sectionsSalaries: null
  },
  mutations: {
    INIT_EMPLOYEES(state, employees) {
      state.employees = employees;
      state.filteredEmployees = employees;
    },
    INIT_SECTIONS(state, employees) {
      state.sections = employees.reduce((sec, emp) => {
        if (sec.indexOf(emp.dzial) === -1) {
          sec.push(emp.dzial);
        }
        return sec;
      }, []);
    },
    SEARCH_EMPLOYEES(state, userInput) {
      state.filteredEmployees = state.employees.filter(employee => {
        const fullName = `${employee.imie} ${employee.nazwisko}`.toLowerCase();
        const userSearch = userInput.toLowerCase();
        return fullName.includes(userSearch);
      });
    },
    FILTER_EMPLOYEES(state, filters) {
      const filterBySalary = state.employees.filter(employee => {
        return (
          employee.wynagrodzenieKwota >= filters.salary.min &&
          employee.wynagrodzenieKwota <= filters.salary.max &&
          employee.wynagrodzenieWaluta === filters.salary.currency
        );
      });
      if (filters.sections.length === 0) {
        return (state.filteredEmployees = filterBySalary);
      }

      return (state.filteredEmployees = filterBySalary.reduce(
        (employees, employee) => {
          if (filters.sections.includes(employee.dzial)) {
            employees.push(employee);
          }
          return employees;
        },
        []
      ));
    },
    ADD_EMPLOYEE(state, newEmployee) {
      return state.employees.push(newEmployee);
    },
    CALCULATE_SALARIES(state, employees) {
      const sectionsSalaries = employees.reduce((sections, employee) => {
        const object = {};
        if (!sections[employee.dzial]) {
          object[employee.wynagrodzenieWaluta] = +employee.wynagrodzenieKwota;
          sections[employee.dzial] = object;
        } else {
          if (
            Object.prototype.hasOwnProperty.call(
              sections[employee.dzial],
              employee.wynagrodzenieWaluta
            )
          ) {
            sections[employee.dzial][employee.wynagrodzenieWaluta] =
              sections[employee.dzial][employee.wynagrodzenieWaluta] +
              +employee.wynagrodzenieKwota;
          } else {
            sections[employee.dzial][employee.wynagrodzenieWaluta] =
              +employee.wynagrodzenieKwota;
          }
        }
        return sections;
      }, {});
      const totalSalaries = {};
      for (const section in sectionsSalaries) {
        for (const currency in sectionsSalaries[section]) {
          if (!totalSalaries[currency]) {
            totalSalaries[currency] = +sectionsSalaries[section][currency];
          } else {
            totalSalaries[currency] =
              totalSalaries[currency] + sectionsSalaries[section][currency];
          }
        }
      }
      state.sectionsSalaries = sectionsSalaries;
      state.totalSalaries = totalSalaries;
    }
  },
  actions: {
    initEmployees: ({ commit }) => {
      commit("INIT_EMPLOYEES", employees);
    },
    initSections: ({ commit }) => {
      commit("INIT_SECTIONS", employees);
    },
    searchEmployees: ({ commit }, userInput) => {
      commit("SEARCH_EMPLOYEES", userInput);
    },
    filterEmployees: ({ commit }, filters) => {
      commit("FILTER_EMPLOYEES", filters);
    },
    addEmployee: ({ dispatch, commit }, newEmployee) => {
      commit("ADD_EMPLOYEE", newEmployee);
      dispatch('initEmployees');
      dispatch('initSections');
      dispatch('calculateSalaries');
    },
    calculateSalaries: ({commit}) => {
      commit("CALCULATE_SALARIES", employees)
    }
  },
  getters: {
    employees: state => {
      return state.filteredEmployees;
    },
    sections: state => {
      return state.sections;
    },
    totalSalaries: state => {
      return state.totalSalaries;
    },
    sectionsSalaries: state => {
      return state.sectionsSalaries;
    }
  }
});
