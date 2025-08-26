namespace BankingSystemPayment.API.Models
{
    public class Tbl_UserDetails
    {
        public int TblId { get; set; }
        public string UserId { get; set; }
        public decimal TotalAmount { get; set; } = 0m;
        public string? Address { get; set; }
        public string? BankName { get; set; }
        public string? Nominee { get; set; }
        public DateTime DOB { get; set; }
        public DateTime CreatedDate { get; set; }
        public string? PAN { get; set; }
    }
}
