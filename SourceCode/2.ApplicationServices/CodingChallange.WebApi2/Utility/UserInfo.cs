using System;
using System.Collections.Generic;

namespace CodingChallange.WebApi2.Utility
{
    public static class UserInfo
    {
        public static Dictionary<string, string> Users = new Dictionary<string, string>()
        {
            { "Admin","Admin" },
            { "User","User" }
        };

        public static Tuple<bool,bool> IsValid(string userName, string password)
        {
            bool isValidUser = false;
            bool isAdmin = false;
            if (Users.ContainsKey(userName) && Users[userName] == password)
            {
                isValidUser = true;
                isAdmin = (userName == "Admin") ? true:false;
            }

            return new Tuple<bool, bool>(isValidUser, isAdmin);
        }
    }
}