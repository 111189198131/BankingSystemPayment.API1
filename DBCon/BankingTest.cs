using Microsoft.EntityFrameworkCore;
using BankingSystemPayment.API.Models;
namespace BankingSystemPayment.API.DBCon
{
    public class BankingTest : DbContext
    {
        
        public BankingTest(DbContextOptions<BankingTest> options ):base(options) 
        {

        }
        public  DbSet<User> Users { get; set; }
        public  DbSet<Tbl_Login> Tbl_Logins { get; set; }
        public  DbSet<Tbl_UserDetails> Tbl_UserDetails { get; set; }
    }
}
