using BankingSystemPayment.API.Models;

namespace BankingSystemPayment.API.Repositories
{
    public interface IUserRepository
    {
        User? GetUserByUsername(string username);
    }
}
