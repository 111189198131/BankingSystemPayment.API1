using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankingSystemPayment.API.Models
{
    [Table("Tbl_Login")]
    public class Tbl_Login
    {
        [Key]
        public int TblId { get; set; }
        public string? UserId { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; } 
        public string? UserType { get; set; }
        public string? SecurityQuestion { get; set; }
        public string? SecurityAnswer { get; set; }
    }
}
