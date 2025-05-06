using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tech_E_Commerce.Models
{
    public class Staff
    {
        [Key]
        public int StaffID { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Username { get; set; }

        [Required]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(100)]
        public string Password { get; set; }

        [Required]
        [StringLength(20)]
        public string Role { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Salary { get; set; }
    }

    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Username { get; set; }

        [Required]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(100)]
        public string Password { get; set; }

        [StringLength(20)]
        public string Phone { get; set; }

        [StringLength(255)]
        public string Address { get; set; }
    }

    public class Category
    {
        [Key]
        public int CategoryID { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        public string Description { get; set; }

        public virtual ICollection<Subcategory> Subcategories { get; set; }
        public virtual ICollection<PromotionApplicability> PromotionApplicabilities { get; set; }
    }

    public class Subcategory
    {
        [Key]
        public int SubcategoryID { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public int CategoryID { get; set; }

        [ForeignKey("CategoryID")]
        public virtual Category Category { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }

    public class Product
    {
        [Key]
        public int ProductID { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; }

        [Required]
        public int Stock { get; set; }

        [Required]
        public int SubcategoryID { get; set; }

        [StringLength(100)]
        public string Brand { get; set; }

        [ForeignKey("SubcategoryID")]
        public virtual Subcategory Subcategory { get; set; }

        public virtual ICollection<ProductImage> ProductImages { get; set; }
        public virtual ICollection<ProductAttributeValue> ProductAttributeValues { get; set; }
        public virtual ICollection<PromotionApplicability> PromotionApplicabilities { get; set; }
        public virtual ICollection<Wishlist> Wishlists { get; set; }
        public virtual ICollection<CartItem> CartItems { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }

    public class ProductImage
    {
        [Key]
        public int ImageID { get; set; }

        [Required]
        public int ProductID { get; set; }

        [Required]
        [StringLength(255)]
        public string ImageURL { get; set; }

        [Required]
        public bool IsPrimary { get; set; }

        [Required]
        public int DisplayOrder { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Product { get; set; }
    }

    public class Attribute
    {
        [Key]
        public int AttributeID { get; set; }

        [Required]
        [StringLength(100)]
        public string AttributeName { get; set; }

        [Required]
        [StringLength(50)]
        public string AttributeType { get; set; }

        public virtual ICollection<AttributeValue> AttributeValues { get; set; }
    }

    public class AttributeValue
    {
        [Key]
        public int ValueID { get; set; }

        [Required]
        public int AttributeID { get; set; }

        [Required]
        [StringLength(100)]
        public string ValueName { get; set; }

        [ForeignKey("AttributeID")]
        public virtual Attribute Attribute { get; set; }

        public virtual ICollection<ProductAttributeValue> ProductAttributeValues { get; set; }
    }

    public class ProductAttributeValue
    {
        [Key]
        [Column(Order = 0)]
        public int ProductID { get; set; }

        [Key]
        [Column(Order = 1)]
        public int ValueID { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Product { get; set; }

        [ForeignKey("ValueID")]
        public virtual AttributeValue AttributeValue { get; set; }
    }

    public class Promotion
    {
        [Key]
        public int PromotionID { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [StringLength(20)]
        public string DiscountType { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal DiscountValue { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal? MinOrderValue { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public virtual ICollection<PromotionApplicability> PromotionApplicabilities { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
    }

    public class PromotionApplicability
    {
        [Key]
        [Column(Order = 0)]
        public int PromotionID { get; set; }

        [Key]
        [Column(Order = 1)]
        public int? ProductID { get; set; }

        [Key]
        [Column(Order = 2)]
        public int? CategoryID { get; set; }

        [ForeignKey("PromotionID")]
        public virtual Promotion Promotion { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Product { get; set; }

        [ForeignKey("CategoryID")]
        public virtual Category Category { get; set; }
    }

    public class Wishlist
    {
        [Key]
        public int WishlistID { get; set; }

        [Required]
        public int CustomerID { get; set; }

        [Required]
        public int ProductID { get; set; }

        [Required]
        public DateTime AddedDate { get; set; }

        [ForeignKey("CustomerID")]
        public virtual Customer Customer { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Product { get; set; }
    }

    public class Cart
    {
        [Key]
        public int CartID { get; set; }

        [Required]
        public int CustomerID { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal TotalPrice { get; set; }

        [ForeignKey("CustomerID")]
        public virtual Customer Customer { get; set; }

        public virtual ICollection<CartItem> CartItems { get; set; }
    }

    public class CartItem
    {
        [Key]
        public int CartItemID { get; set; }

        [Required]
        public int CartID { get; set; }

        [Required]
        public int ProductID { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Subtotal { get; set; }

        [ForeignKey("CartID")]
        public virtual Cart Cart { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Product { get; set; }
    }

    public class Orders
    {
        [Key]
        public int OrderID { get; set; }

        [Required]
        public int CustomerID { get; set; }

        public int? PromotionID { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal TotalPrice { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal? DiscountAmount { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal FinalPrice { get; set; }

        [Required]
        [StringLength(50)]
        public string Status { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        [ForeignKey("CustomerID")]
        public virtual Customer Customer { get; set; }

        [ForeignKey("PromotionID")]
        public virtual Promotion Promotion { get; set; }

        public virtual ICollection<OrderItem> OrderItems { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<Shipping> Shippings { get; set; }
    }

    public class OrderItem
    {
        [Key]
        public int OrderItemID { get; set; }

        [Required]
        public int OrderID { get; set; }

        [Required]
        public int ProductID { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Subtotal { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal? DiscountAmount { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal FinalSubtotal { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        [ForeignKey("OrderID")]
        public virtual Orders Order { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Product { get; set; }
    }

    public class Payment
    {
        [Key]
        public int PaymentID { get; set; }

        [Required]
        public int OrderID { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }

        [Required]
        [StringLength(50)]
        public string PaymentMethod { get; set; }

        [Required]
        [StringLength(50)]
        public string PaymentStatus { get; set; }

        [Required]
        public DateTime PaymentDate { get; set; }

        [ForeignKey("OrderID")]
        public virtual Orders Order { get; set; }
    }

    public class Shipping
    {
        [Key]
        public int ShippingID { get; set; }

        [Required]
        public int OrderID { get; set; }

        [Required]
        [StringLength(255)]
        public string Address { get; set; }

        [Required]
        [StringLength(20)]
        public string Phone { get; set; }

        [Required]
        [StringLength(50)]
        public string ShippingMethod { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal ShippingCost { get; set; }

        [Required]
        [StringLength(50)]
        public string Status { get; set; }

        [ForeignKey("OrderID")]
        public virtual Orders Order { get; set; }
    }

    public class Review
    {
        [Key]
        public int ReviewID { get; set; }

        [Required]
        public int CustomerID { get; set; }

        [Required]
        public int ProductID { get; set; }

        [Required]
        [Range(1, 5)]
        public int Rating { get; set; }

        public string Comment { get; set; }

        [ForeignKey("CustomerID")]
        public virtual Customer Customer { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Product { get; set; }
    }
}