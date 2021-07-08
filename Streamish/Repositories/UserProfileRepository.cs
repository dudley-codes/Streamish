using Microsoft.Extensions.Configuration;
using Streamish.Models;
using Streamish.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streamish.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT Id,
                                            Name,
                                            Email,
                                            ImageUrl,
                                            DateCreated
                                        FROM UserProfile";

                    var reader = cmd.ExecuteReader();

                    var users = new List<UserProfile>();

                    while (reader.Read())
                    {
                        users.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                        });
                    }

                    reader.Close();

                    return users;
                }
            }
        }

        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT Id,
                                            Name,
                                            Email,
                                            ImageUrl,
                                            DateCreated
                                        FROM UserProfile
                                        WHERE Id = @Id
                                       ";
                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    UserProfile user = null;

                    if (reader.Read())
                    {
                        user = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                        };
                    }

                    reader.Close();

                    return user;
                }
            }
        }

        public void Add(UserProfile user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO UserProfile 
                                            (Name, Email, DateCreated, ImageUrl)
                                            OUTPUT INSERTED.ID
                                        VALUES (@name, @email, @dateCreated, @imageUrl)
                                        ";

                    DbUtils.AddParameter(cmd, "@name", user.Name);
                    DbUtils.AddParameter(cmd, "@email", user.Email);
                    DbUtils.AddParameter(cmd, "@dateCreated", user.DateCreated);
                    DbUtils.AddParameter(cmd, "@imageUrl", user.ImageUrl);

                    user.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(UserProfile user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE UserProfile
		                                SET Name = @name,
			                                DateCreated = @dateCreated,
			                                Email = @email,
			                                ImageUrl = @imageUrl
		                                WHERE Id = @id;";

                    DbUtils.AddParameter(cmd, "@name", user.Name);
                    DbUtils.AddParameter(cmd, "@dateCreated", user.DateCreated);
                    DbUtils.AddParameter(cmd, "@email", user.Email);
                    DbUtils.AddParameter(cmd, "@imageUrl", user.ImageUrl);
                    DbUtils.AddParameter(cmd, "@id", user.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM UserProfile WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
