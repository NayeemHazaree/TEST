using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEST_Models.Models
{
    public class SalesDetail
    {
        [Key]
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        [Display(Name = "Sales Master")]
        public int SalesMasterId { get; set; }
        [ForeignKey("SalesMasterId")]
        public virtual SelesMaster? selesMaster { get; set; }
        [Display(Name = "Product")]
        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product? product { get; set; }

    }
}
