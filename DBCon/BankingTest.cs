using Microsoft.EntityFrameworkCore;
using BankingSystemPayment.API.Models;
namespace BankingSystemPayment.API.DBCon
{
    public class BankingTest : DbContext
    {

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Tbl_Login> Tbl_Logins { get; set; }
        public virtual DbSet<Tbl_UserDetails> Tbl_UserDetails { get; set; }
    }
}
