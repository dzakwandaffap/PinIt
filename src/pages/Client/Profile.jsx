import React, { useState, useEffect } from 'react';
import { Camera, Edit3, Calendar, Mail, Save, X, Phone, User, Info } from 'lucide-react';
import TemplateNav from '../../Layout/TemplateNav';
import api from '../../Services/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/users/profile');
      setUser(data.data);
      setEditForm(data.data);
    } catch (err) {
      console.error('Error fetching user profile:', err);
      const msg = err.response?.data?.message || 'Gagal memuat profil';
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  // Simpan perubahan profil
  const handleSave = async () => {
    try {
      setSaving(true);
      const formData = new FormData();

      for (const key of ['username', 'name', 'email', 'bio', 'gender', 'numberPhone']) {
        formData.append(key, editForm[key] || '');
      }

      if (editForm.imageFile) {
        formData.append('image', editForm.imageFile);
      }
      if (editForm.numberPhone === '+62' || editForm.numberPhone.length <= 3) {
        alert('Nomor telepon tidak boleh 0 setelah +62');
        setSaving(false);
        return;
      }

      const { data } = await api.put('/users/profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUser(data.data);
      setIsEditing(false);
      alert('Profil berhasil diperbarui');
    } catch (err) {
      console.error('Error updating profile:', err);
      const msg = err.response?.data?.message || 'Gagal update profil';
      alert(msg);
    } finally {
      setSaving(false);
    }
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    if (!isEditing && user) setEditForm(user);
  };

  const handleInputChange = (field, value) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setUser((prev) => ({ ...prev, image: preview }));
    setEditForm((prev) => ({ ...prev, imageFile: file }));
  };

  //validasi taambahan buat numberphone
  const handlePhoneChange = (value) => {
  if (!value.startsWith('+62')) value = '+62' + value.replace(/^\+*/, '');
  value = value.replace(/[^\d+]/g, '');
  if (!value.startsWith('+62')) value = '+62';
  const after = value.slice(3);
  if (after.startsWith('0')) {
    value = '+62' + after.slice(1);
  }

  setEditForm((prev) => ({ ...prev, numberPhone: value }));
};

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

  if (!user) {
    return (
      <TemplateNav>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="text-red-500">User profile tidak ditemukan</p>
        </div>
      </TemplateNav>
    );
  }

  return (
    <TemplateNav>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Profile */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                  {user.image ? (
                    <img
                      src={
                        user.image.startsWith('blob')
                          ? user.image
                          : `${import.meta.env.VITE_API_URL || 'http://localhost:3113'}/${user.image}`
                      }
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-gray-600">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  )}
                </div>
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full cursor-pointer hover:bg-gray-800">
                    <Camera className="w-4 h-4" />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                )}
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
                <p className="text-gray-600 text-lg mb-4">@{user.username}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Member since{' '}
                      {new Intl.DateTimeFormat('id-ID', { year: 'numeric', month: 'long' }).format(
                        new Date(user.timestamp)
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informasi Profil */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ProfileField
                label="Username"
                value={editForm.username}
                isEditing={isEditing}
                onChange={(e) => handleInputChange('username', e.target.value)}
                prefix="@"
              />
              <ProfileField
                label="Full Name"
                value={editForm.name}
                isEditing={isEditing}
                onChange={(e) => handleInputChange('name', e.target.value)}
                icon={<User className="w-4 h-4 mr-2" />}
              />
              <ProfileField
                label="Email Address"
                value={editForm.email}
                isEditing={isEditing}
                type="email"
                onChange={(e) => handleInputChange('email', e.target.value)}
                icon={<Mail className="w-4 h-4 mr-2" />}
              />
              <ProfileField
                label="Phone Number"
                value={editForm.numberPhone || '+62'}
                isEditing={isEditing}
                onChange={(e) => handlePhoneChange(e.target.value)}
                icon={<Phone className="w-4 h-4 mr-2" />}
              />
              <ProfileField
                label="Gender"
                value={editForm.gender}
                isEditing={isEditing}
                type="select"
                onChange={(e) => handleInputChange('gender', e.target.value)}
                options={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                ]}
              />
              <ProfileField
                label="Bio"
                value={editForm.bio}
                isEditing={isEditing}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                type="textarea"
                fullWidth
              />
            </div>

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

// Komponen Field Reusable
const ProfileField = ({
  label,
  value,
  onChange,
  isEditing,
  type = 'text',
  prefix = '',
  icon,
  options = [],
  fullWidth = false,
}) => (
  <div className={fullWidth ? 'md:col-span-2' : ''}>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    {isEditing ? (
      type === 'textarea' ? (
        <textarea
          value={value || ''}
          onChange={onChange}
          rows={3}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
        />
      ) : type === 'select' ? (
        <select
          value={value || ''}
          onChange={onChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value || ''}
          onChange={onChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
        />
      )
    ) : (
      <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
        {icon}
        {prefix}
        {value || 'Not specified'}
      </div>
    )}
  </div>
);

export default Profile;
