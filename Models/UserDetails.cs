namespace BankingSystemPayment.API.Models
{
    public class UserDetails
    {
        public int TblId { get; set; }
        public int UserId { get; set; }
        public decimal? Balance { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? Address { get; set; }
        public string? Contact { get; set; }
        public string? Nomnee { get; set; }
        public string BankName { get; set; } = string.Empty;
    }
}
