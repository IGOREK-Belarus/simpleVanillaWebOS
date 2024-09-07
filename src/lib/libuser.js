import * as usersList from "../etc/users/userslist.js";

export let isRootEnabled = usersList.rootEnabled;

export function addUser(userName, password){
    let number = usersList.users.length;
    let isPossible;
    for(let i = 0; i < number; i++){
        if(usersList.users[i][0] == userName){
            console.error("User: " + userName + " already exist");
            isPossible = false;
            return 1;
        }
        else{
            isPossible = true;
        }
    }
    if(isPossible == true){
        usersList.users.push([userName, true, password]);
    }
}

export function listUsers(showAllUsers){
    let number = usersList.users.length;
    if(number == 0){
        return null;
    }
    else{
        let array = [];
        for(let i = 0; i < number; i++){
            if(showAllUsers == false || showAllUsers == undefined){
                if(usersList.users[i][1] == false){
                    continue;
                }
                else{
                    array.push(usersList.users[i][0]);
                }
            }
            else if(showAllUsers == true){
                array.push(usersList.users[i][0]);
            }
            else{
                console.error("Wrong argument for ShowAllUsers: " + showAllUsers);
            }
        }
        console.log(usersList.users);
        return array;
    }
}
export function removeUesr(userName){
    let number = usersList.users.length;
    let isPossible;
    for(let i = 0; i < number; i++){
        if(usersList.users[i][0] == userName){
            isPossible = true;
        }
        else{
            isPossible = false;
        }
    }
    if(isPossible == true){
        userName.users([userName, true, password]);
    }
    else{
        console.error("User: " + userName + " doesn't exist");
    }
}
export function changePassword(userName, newPassword, remove){
    let number = usersList.users.length;
    let isPossible;
    let userID;
    for(let i = 0; i < number; i++){
        if(usersList.users[i][0] == userName){
            isPossible = true;
            userID = i;
        }
        else{
            isPossible = false;
        }
    }

    if(isPossible == true){
        if(remove == true){
            usersList.users[userID][2] = undefined;
        }
        else{
            usersList.users[userID][2] = newPassword;
        }
    }
    else{
        console.error("User: " + userName + " doesn't exist");
    }
}
export function switchUserState(userName, isEnabledState){
    let number = usersList.users.length;
    let isPossible;
    let userID;
    for(let i = 0; i < number; i++){
        if(usersList.users[i][0] == userName){
            isPossible = true;
            userID = i;
        }
        else{
            isPossible = false;
        }
    }

    if(isPossible == true){
        if(isEnabledState == true){
            usersList.users[userID][1] = true;
        }
        else{
            usersList.users[userID][2] = newPassword;
        }
    }
    else{
        console.error("User: " + userName + " doesn't exist");
    }
}