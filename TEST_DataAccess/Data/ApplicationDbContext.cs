using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEST_Models.Models;

namespace TEST_DataAccess.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options ) : base(options)
        {

        }
        public DbSet<Product> Product { get; set; }
        public DbSet<SelesMaster> SelesMasters { get; set; }
        public DbSet<SalesDetail> SalesDetail { get; set; }
    }
}
