using BankingSystemPayment.API.Models;

namespace BankingSystemPayment.API.Repositories
{
    public interface IUserRepository
    {
        Tbl_Login? GetUserByUsername(string username,string password);
    }
}
