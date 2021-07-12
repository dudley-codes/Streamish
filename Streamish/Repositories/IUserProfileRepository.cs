using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        public List<UserProfile> GetAll();
        public UserProfile GetById(int id);
        void Add(UserProfile user);
        void Update(UserProfile user);
        void Delete(int id);
        public UserProfile GetUserVideos(int id);
    }
}