using BankingSystemPayment.API.Models;

namespace BankingSystemPayment.API.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly List<User> _users = new List<User>
        {
            new User { Id = 1, UserName = "Ashish", PasswordHash = "A@1234" } 
        };
        public User? GetUserByUsername(string username)
        {
            return _users.FirstOrDefault(u => u.UserName == username);
        }
    }
}
