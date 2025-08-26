using BankingSystemPayment.API.Models;
using BankingSystemPayment.API.DBCon;
using Microsoft.AspNetCore.Http.HttpResults;

namespace BankingSystemPayment.API.Repositories
{
    public class UserRepository : IUserRepository
    {

        private readonly BankingTest db;

        public UserRepository(BankingTest bankingTest)
        {
            db=bankingTest;
        }
        
        public Tbl_Login GetUserByUsername(string username,string password)
        {
            var text= db.Tbl_Logins.FirstOrDefault(u => u.UserName == username && u.Password==password);
           return db.Tbl_Logins.FirstOrDefault(x => x.UserName == username && x.Password == password);
            
        }
    }
}
