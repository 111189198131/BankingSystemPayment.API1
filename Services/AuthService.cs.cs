using BankingSystemPayment.API.DTOs;
using BankingSystemPayment.API.Repositories;

namespace BankingSystemPayment.API.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;

        public AuthService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public LoginResponse Login(LoginRequest request)
        {
            var user = _userRepository.GetUserByUsername(request.Username,request.Password);

            if (user == null || user.Password  != request.Password)
            {
                return new LoginResponse
                {
                    Message = "Invalid username or Password"
                };

            }
            // Token generator logic
            var token = Convert.ToBase64String(Guid.NewGuid().ToByteArray());

            return new LoginResponse
            {
                Token = token,
                Message = "Login successful"

            };
        }

    }
}
