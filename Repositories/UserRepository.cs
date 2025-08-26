using BankingSystemPayment.API.Models;
using BankingSystemPayment.API.DBCon;

namespace BankingSystemPayment.API.Repositories
{
    public class UserRepository : IUserRepository
    {

        private readonly BankingTest db = new BankingTest();
        private readonly List<User> _users = new List<User>
        {
            new User { Id = 1, UserName = "Ashish", PasswordHash = "A@1234" } 
        };
        private readonly List<Tbl_Login> tbl_Login= new List<Tbl_Login>();
        public Tbl_Login? GetUserByUsername(string username,string password)
        {
            //return db.tbl_Login.FirstOrDefault(u => u.UserId == username && u.Password==password);
           var test= db.Tbl_Logins.FirstOrDefault(x => x.UserId == username && x.Password == password);
            return db.Tbl_Logins.FirstOrDefault(x => x.UserId == username && x.Password == password);
        }
    }
}
