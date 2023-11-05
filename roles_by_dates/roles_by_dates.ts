import { Role } from './role';

function updateMap(map: Map<Date, Role>, role: Role, dates: Array<Date>) {
    for (let i = 0; i < dates.length; i++) {
        let date = dates[i];
        if (role.getEffectiveFrom() <= date) {
            let existingRole = map.get(date);

            if (!existingRole) {
                map.set(date, role);
            } else if (existingRole.getEffectiveFrom() < role.getEffectiveFrom()) {
                map.set(date, role);
            }
        }
    }
}

/**
 * Calculates what role an employee had per given set of dates
 * @param history Employee role history not-sorted
 * @param dates list of dates
 */
function getRolesByDate(history: Array<Role>, dates: Array<Date>) {
    // your code here
    //loop on history

    let map = new Map();
    for (let i = 0; i < history.length; i++) {
        let role = history[i];
        updateMap(map, role, dates);
    }

    //map.set(Date.now(), new Role("bla", Date.now()))
    return map;
}

// let rolesHistory = [
//     new Role('Team Leader', new Date(2020, 7, 1)),
//     new Role('Sraff Engineer', new Date(2022, 7, 1)),

//     new Role('Fullstack developer', new Date(2016, 4, 15)),
//     new Role('Frontend developer', new Date(2014, 10, 17)),
// ];

// let dates = [
//     new Date(2017, 7, 1),
//     new Date(2014, 0, 1),
//     new Date(2020, 0, 1),
//     new Date(2021, 5, 1),
//     new Date(2022, 9, 1),
// ];

// let rolesByDates = getRolesByDate(rolesHistory, dates);

// rolesByDates.forEach((role, date) =>
//     console.log(`date = ${date}, role = ${role.getTitle()}`)
// );

export { getRolesByDate, updateMap };
