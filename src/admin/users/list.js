const users = [
  {
    name:'Mapenzi Mudimba',
    dob: '05/05/83',
    role:'manager',
    salary:'220,000'
  },
  {
    name:'Mudimba Mapenzi',
    dob: '12/09/12',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Muzamba Mapenzi',
    dob: '05/05/83',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Mapenzi Muzamba',
    dob: '08/05/83',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'nacoolwe Mudimba',
    dob: '12/09/12',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Mudimba Nacoolwe',
    dob: '09/12/12',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Muzamba Nacoolwe',
    dob: '13/09/12',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Nacoolwe Muzamba',
    dob: '12/09/12',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Nomaqhawe Mudimba',
    dob: '09/12/12',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Mudimba NomaQhawe',
    dob: '18/05/16',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Muzamba Nomaqhawe',
    dob: '05/05/16',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Nomaqhawe Muzamba',
    dob: '02/05/16',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Nathaniel Mudimba',
    dob: '18/02/19',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Mudimba Nathaniel',
    dob: '02/02/19',
    role:'worker',
    salary:'120,000'
  },
  {
    name:'Nathaniel Muzamba',
    dob: '12/12/89',
    role:'manager',
    salary:'120,000'
  },
];

export const UsersList = () => {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="text-left">
        <tr>
          <th className="sticky inset-y-0 start-0 bg-white px-4 py-2">
            <label htmlFor="SelectAll" className="sr-only">Select All</label>
  
            <input
              type="checkbox"
              id="SelectAll"
              className="h-5 w-5 rounded border-gray-300"
            />
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Date of Birth
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Role
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Salary
          </th>
        </tr>
      </thead>
  
      <tbody className="divide-y divide-gray-200">
        {
          users.map((user, i) => (
            <tr key={i} >
              <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                <label className="sr-only" htmlFor="Row1">Row 1</label>
      
                <input
                  className="h-5 w-5 rounded border-gray-300"
                  type="checkbox"
                  id="Row1"
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {user.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.dob}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.role}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.salary}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}