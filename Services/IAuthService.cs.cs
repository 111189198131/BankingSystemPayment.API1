using BankingSystemPayment.API.DTOs;

namespace BankingSystemPayment.API.Services
{
    public interface IAuthService
    {
        LoginResponse Login(LoginRequest request);
    }
}
