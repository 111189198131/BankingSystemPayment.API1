using Microsoft.AspNetCore.Mvc;
using BankingSystemPayment.API.Services;
using BankingSystemPayment.API.DTOs;

namespace BankingSystemPayment.API.Controllers
{
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var response = _authService.Login(request);
            if (response.Token  == string.Empty)
            {
                return Unauthorized(response);
            }
            return Ok(response);
        }
    }
}
