namespace BankingSystemPayment.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; } = string.Empty;
        //public int TblId { get; set; }
        //public string UserId { get; set; }
        //public string UserName { get; set; }
        //public string PasswordHash { get; set; } = string.Empty;
        //public string? UserType { get; set; }
        //public int ? MPIN { get; set; }
        //public string SecurityQuestion { get; set; } = string.Empty;
        //public string SecurityAnswer { get; set; } = string.Empty;
    }
}
