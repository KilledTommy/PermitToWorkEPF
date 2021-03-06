﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PermitToWorkRepf.Data;

namespace tmp.Migrations
{
    [DbContext(typeof(RepfDbContext))]
    partial class RepfDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0");

            modelBuilder.Entity("PermitToWorkRepf.Models.Machine", b =>
                {
                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<string>("notes")
                        .HasColumnType("TEXT");

                    b.HasKey("name");

                    b.ToTable("Machines");
                });

            modelBuilder.Entity("PermitToWorkRepf.Models.SignIn", b =>
                {
                    b.Property<int>("StudentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("time")
                        .HasColumnType("TEXT");

                    b.HasKey("StudentId");

                    b.ToTable("SignIns");
                });

            modelBuilder.Entity("PermitToWorkRepf.Models.Student", b =>
                {
                    b.Property<ulong>("StudentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Graduation")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int?>("SignInStudentId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Team")
                        .HasColumnType("TEXT");

                    b.HasKey("StudentId");

                    b.HasIndex("SignInStudentId");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("PermitToWorkRepf.Models.Student", b =>
                {
                    b.HasOne("PermitToWorkRepf.Models.SignIn", null)
                        .WithMany("Students")
                        .HasForeignKey("SignInStudentId");
                });
#pragma warning restore 612, 618
        }
    }
}
