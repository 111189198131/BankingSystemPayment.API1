namespace BankingSystemPayment.API.Models
{
    public class Tbl_Login
    {
        public int TblId { get; set; }
        public string? UserId { get; set; }
        public string? UseName { get; set; }
        public string? Password { get; set; } 
        public string? UserType { get; set; }
        public string? SecurityQuestion { get; set; }
        public string? SecurityAnswer { get; set; }
    }
}
