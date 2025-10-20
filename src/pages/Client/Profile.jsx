import React, { useState, useEffect } from 'react';
import { Camera, Edit3, Calendar, Mail, Save, X } from 'lucide-react';
import TemplateNav from '../../Layout/TemplateNav';
import api from '../../Services/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch profile saat komponen mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

  // 🔹 Ambil data profil user
  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const { data } = await api.get('/users/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data.data);
      setEditForm(data.data);
    } catch (err) {
      console.error('Error fetching user profile:', err);
      const errorMsg = err.response?.data?.message || 'Gagal memuat profil';
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Simpan perubahan profil
  const handleSave = async () => {
    try {
      setSaving(true);
      const token = localStorage.getItem('token');

      const formData = new FormData();
      // isi semua field teks
      formData.append('username', editForm.username || '');
      formData.append('name', editForm.name || '');
      formData.append('email', editForm.email || '');
      formData.append('bio', editForm.bio || '');
      formData.append('gender', editForm.gender || '');
      formData.append('numberPhone', editForm.numberPhone || '');

      // kalau user upload gambar baru, tambahkan file-nya
      if (editForm.imageFile) {
        formData.append('image', editForm.imageFile);
      }

      const { data } = await api.put('/users/profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setUser(data.data);
      setIsEditing(false);
      alert('Profil berhasil diperbarui');
    } catch (err) {
      console.error('Error updating profile:', err);
      const errorMsg = err.response?.data?.message || 'Gagal update profil';
      alert(errorMsg);
    } finally {
      setSaving(false);
    }
  };


  // 🔹 Aktifkan / batalkan mode edit
  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    if (!isEditing && user) setEditForm(user);
  };

  // 🔹 Update field di form edit
  const handleInputChange = (field, value) => {
    setEditForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // 🔹 Upload foto profil lokal (preview)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setUser((prev) => ({ ...prev, image: imageUrl }));

    // simpan file ke editForm agar bisa dikirim ke backend
    setEditForm((prev) => ({
      ...prev,
      imageFile: file,
    }));
  };


  // 🔹 Tampilan saat loading
  if (loading) {
    return (
      <TemplateNav>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
      </TemplateNav>
    );
  }

  // 🔹 Jika data user tidak ada
  if (!user) {
    return (
      <TemplateNav>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="text-red-500">User profile tidak ditemukan</p>
        </div>
      </TemplateNav>
    );
  }

  // 🔹 Tampilan utama profil
  return (
    <TemplateNav>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* --- Header Profil --- */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                  {user.image ? (
                    <img
                      src={user.image?.startsWith('http') ? user.image : `${import.meta.env.VITE_API_URL}/${user.image}`}
                      alt="Profile"
                    />

                  ) : (
                    <span className="text-4xl font-bold text-gray-600">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full cursor-pointer hover:bg-gray-800">
                  <Camera className="w-4 h-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {user.name || 'Anonymous User'}
                  </h1>
                  <button
                    onClick={handleEditToggle}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                  >
                    {isEditing ? <X className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-gray-600 text-lg mb-4">@{user.username || 'username'}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Member since{' '}
                      {user.timestamp
                        ? new Date(user.timestamp).getFullYear()
                        : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Informasi Profil --- */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.username || ''}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                    @{user.username || 'Not specified'}
                  </p>
                )}
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                    {user.name || 'Not specified'}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editForm.email || ''}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
                  />
                ) : (
                  <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{user.email || 'Not specified'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tombol Simpan / Batal */}
            {isEditing && (
              <div className="flex justify-end gap-4 mt-8 pt-6 border-t">
                <button
                  onClick={handleEditToggle}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800"
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </TemplateNav>
  );
};

export default Profile;
