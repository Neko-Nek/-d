import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Camera, 
  Smartphone, 
  Users, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Bot,
  ArrowRight,
  Award,
  FileText,
  Globe
} from 'lucide-react';

// --- Types ---

interface PageWrapperProps {
  children: React.ReactNode;
  isActive: boolean;
  direction: number;
  key?: React.Key;
}

// --- Page Components ---

const PageWrapper = ({ children, isActive, direction }: PageWrapperProps) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      zIndex: 0,
    }),
  };

  return (
    <AnimatePresence initial={false} custom={direction}>
      {isActive && (
        <motion.div
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            rotateY: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full bg-white overflow-y-auto overflow-x-hidden flex flex-col"
          style={{ perspective: 1000 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CoverPage = () => (
  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gradient-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-edukid-blue rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-edukid-orange rounded-full blur-[120px]" />
    </div>
    
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="z-10"
    >
      <div className="mb-8 flex justify-center">
        <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
          <img 
            src="https://storage.googleapis.com/mumbai_ai_studio_public_assets/ais-dev-4lw3y4gw2kqwmeac7fq7gg-719918344713/input_file_5.png" 
            alt="Edukid Logo" 
            className="max-w-full max-h-full object-contain mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <span className="text-sm font-bold tracking-[0.3em] text-edukid-orange uppercase mb-4 block">GIẢI PHÁP GIÁO DỤC SỐ</span>
      <h1 className="text-5xl md:text-7xl font-black text-navy mb-6 font-display leading-tight">
        EDUKID<br/>
        <span className="text-2xl md:text-3xl font-bold block mt-2 text-gray-400">DÀNH CHO CẤP MẦM NON</span>
      </h1>
      <div className="w-24 h-1 bg-navy mx-auto mb-8" />
      <p className="text-2xl font-serif italic text-navy/80 mb-12">
        “Kết nối công nghệ, nâng tầm tri thức”
      </p>
      <div className="flex items-center justify-center gap-2 text-navy font-bold animate-bounce">
        <span>Mở xem Catalogue</span>
        <ArrowRight size={20} />
      </div>
    </motion.div>
  </div>
);

const IntroPage = () => (
  <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-400 uppercase tracking-widest mb-2">GIỚI THIỆU</h2>
      <h3 className="text-4xl font-extrabold text-navy mb-8">Hệ sinh thái giáo dục số AISAVA</h3>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="font-medium text-navy text-lg">
            AISAVA là hệ sinh thái giáo dục số toàn diện, kết nối chặt chẽ Nhà trường – Giáo viên – Học sinh – Phụ huynh trên một nền tảng thống nhất.
          </p>
          <p>
            Ứng dụng công nghệ AI và Big Data, AISAVA giúp nhà trường tối ưu hóa vận hành, giảm tải thủ tục hành chính và cá nhân hóa lộ trình học tập. Đây là giải pháp chuyển đổi số đồng bộ, kiến tạo môi trường giáo dục thông minh và hiện đại cho Việt Nam.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="p-3 bg-edukid-blue/10 rounded-xl text-edukid-blue">
              <Bot size={32} />
            </div>
            <div>
              <p className="font-bold text-navy">Công nghệ AI & Big Data</p>
              <p className="text-sm">Tối ưu hóa vận hành & Cá nhân hóa</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/aisava-vision/600/800" 
            alt="AISAVA Vision" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-edukid-orange text-white p-6 rounded-2xl shadow-xl">
            <p className="text-3xl font-black">5+</p>
            <p className="text-xs font-bold">Năm kinh nghiệm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PartnersPage = () => {
  const partners = [
    { 
      name: "Sở GD&ĐT TP.HCM", 
      desc: "Triển khai Sổ đăng bộ và Học liệu số chung toàn ngành.",
      logo: "https://storage.googleapis.com/mumbai_ai_studio_public_assets/ais-dev-4lw3y4gw2kqwmeac7fq7gg-719918344713/input_file_0.png"
    },
    { 
      name: "NXB Giáo dục Gia Định", 
      desc: "Cung cấp kho tài liệu số bản quyền bám sát bộ sách Chân Trời Sáng Tạo.",
      logo: "https://storage.googleapis.com/mumbai_ai_studio_public_assets/ais-dev-4lw3y4gw2kqwmeac7fq7gg-719918344713/input_file_1.png"
    },
    { 
      name: "ĐH Sư phạm TP.HCM", 
      desc: "Xây dựng ngân hàng đề thi tiếng Anh chuẩn Cambridge.",
      logo: "https://storage.googleapis.com/mumbai_ai_studio_public_assets/ais-dev-4lw3y4gw2kqwmeac7fq7gg-719918344713/input_file_2.png"
    },
    { 
      name: "MobiFone", 
      desc: "Triển khai chữ ký số và xác thực điện tử an toàn.",
      logo: "https://storage.googleapis.com/mumbai_ai_studio_public_assets/ais-dev-4lw3y4gw2kqwmeac7fq7gg-719918344713/input_file_3.png"
    },
    { 
      name: "Sun Edu", 
      desc: "Phát triển nguồn nhân lực công nghệ chất lượng cao.",
      logo: "https://storage.googleapis.com/mumbai_ai_studio_public_assets/ais-dev-4lw3y4gw2kqwmeac7fq7gg-719918344713/input_file_4.png"
    }
  ];

  return (
    <div className="flex-1 p-8 md:p-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-navy mb-12 text-center uppercase tracking-tight">Mạng Lưới Đối Tác Chiến Lược</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center md:items-start hover:shadow-md transition-shadow">
              <div className="w-32 h-20 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-xl p-2">
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-navy mb-2 text-lg">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 p-10 bg-navy rounded-[2.5rem] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
          <p className="text-xl font-serif italic opacity-90 relative z-10">“Hợp tác sâu rộng với các đơn vị hàng đầu để kiến tạo môi trường giáo dục số thông minh.”</p>
        </div>
      </div>
    </div>
  );
};

const CertificationsPage = () => (
  <div className="flex-1 p-8 md:p-16 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-navy mb-12 text-center">Chứng Nhận & Pháp Lý</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="p-3 bg-green-50 rounded-xl text-green-600">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="font-bold text-navy text-xl mb-2">An Toàn Thông Tin Cấp Độ 3</h3>
              <p className="text-gray-600 text-sm">Được Sở GD&ĐT TPHCM phê duyệt cấp độ an toàn an ninh thông tin cao nhất cho hệ thống giáo dục.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <Award size={32} />
            </div>
            <div>
              <h3 className="font-bold text-navy text-xl mb-2">Chứng Nhận Bảo Mật VSEC</h3>
              <p className="text-gray-600 text-sm">Đáp ứng tiêu chuẩn CIS BENCHMARKS và NIST BENCHMARKS quốc tế.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
              <FileText size={32} />
            </div>
            <div>
              <h3 className="font-bold text-navy text-xl mb-2">Công Văn 1567/SGDĐT-VP</h3>
              <p className="text-gray-600 text-sm">Về việc triển khai cơ sở dữ liệu, giải pháp chuyển đổi số và ứng dụng AI trong trường học.</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-3xl p-4 shadow-inner flex items-center justify-center">
          <img 
            src="https://picsum.photos/seed/legal-doc/500/700" 
            alt="Legal Document" 
            className="rounded-xl shadow-lg max-h-[500px]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </div>
);

const ProductCataloguePage = () => {
  const products = [
    { title: "Sổ đăng bộ điện tử", desc: "Số hóa toàn bộ hồ sơ học vụ, thay thế sổ giấy. Tích hợp chữ ký số đảm bảo tính pháp lý.", icon: <FileText className="text-blue-500" /> },
    { title: "Học liệu số mầm non", desc: "Kho học liệu tương tác sinh động, giúp trẻ vừa học vừa chơi, phát triển tư duy.", icon: <BookOpen className="text-purple-500" /> },
    { title: "Quản lý trường học", desc: "Theo dõi toàn diện với Sổ sức khỏe điện tử và Sổ bé ngoan hằng ngày.", icon: <Users className="text-green-500" /> },
    { title: "Camera AI thông minh", desc: "Điểm danh tự động bằng nhận diện khuôn mặt, giám sát an ninh thực tế.", icon: <Camera className="text-orange-500" /> },
    { title: "App Học cùng AI", desc: "Ứng dụng dành riêng cho phụ huynh đồng hành cùng con mọi lúc mọi nơi.", icon: <Smartphone className="text-navy" /> }
  ];

  return (
    <div className="flex-1 p-8 md:p-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-navy mb-12 text-center">Danh Mục Sản Phẩm Edukid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-edukid-orange transition-all group">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-edukid-orange/10 transition-colors">{p.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SoDangBoPage = () => (
  <div className="flex-1 flex flex-col md:flex-row">
    <div className="md:w-1/2 bg-white p-12 flex flex-col justify-center">
      <h2 className="text-sm font-bold text-edukid-blue uppercase tracking-widest mb-4">SẢN PHẨM 01</h2>
      <h3 className="text-4xl font-extrabold text-navy mb-6">Sổ Đăng Bộ Điện Tử</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Giải pháp số hóa toàn diện hồ sơ học sinh và giáo viên, giúp nhà trường quản lý dữ liệu tập trung – chính xác – bảo mật.
      </p>
      <div className="space-y-4">
        {[
          'Tích hợp công nghệ ký số pháp lý',
          'Loại bỏ in ấn và lưu trữ cồng kềnh',
          'Báo cáo và chia sẻ thông tin nhanh chóng',
          'Minh bạch, đồng bộ toàn hệ thống'
        ].map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="text-edukid-blue" size={20} />
            <span className="text-sm font-medium text-navy">{f}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="md:w-1/2 bg-edukid-blue/5 flex items-center justify-center p-12">
      <div className="relative">
        <img 
          src="https://picsum.photos/seed/sodangbo/600/800" 
          alt="Sổ Đăng Bộ Interface" 
          className="rounded-3xl shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
          <FileText className="text-edukid-blue" size={32} />
        </div>
      </div>
    </div>
  </div>
);

const HocLieuSoPage = () => (
  <div className="flex-1 p-8 md:p-16 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/hl1/400/400" className="rounded-2xl shadow-md" alt="Học liệu 1" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/hl2/400/400" className="rounded-2xl shadow-md mt-8" alt="Học liệu 2" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/hl3/400/400" className="rounded-2xl shadow-md -mt-8" alt="Học liệu 3" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/hl4/400/400" className="rounded-2xl shadow-md" alt="Học liệu 4" referrerPolicy="no-referrer" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-4">SẢN PHẨM 02</h2>
          <h3 className="text-4xl font-extrabold text-navy mb-6">Học Liệu Số Mầm Non</h3>
          <p className="text-lg text-gray-600 mb-8">
            “Học vui, phát triển toàn diện”. Kho học liệu phong phú, tập trung theo các lĩnh vực: Nhận thức – Ngôn ngữ – Thẩm mỹ – Kỹ năng sống.
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-4">
              <div className="p-3 bg-purple-50 rounded-xl text-purple-500 h-fit"><Bot size={24} /></div>
              <div>
                <p className="font-bold text-navy">Đa dạng hình thức</p>
                <p className="text-sm text-gray-500">Bài tập tương tác, video hướng dẫn, tài liệu PDF.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-purple-50 rounded-xl text-purple-500 h-fit"><Users size={24} /></div>
              <div>
                <p className="font-bold text-navy">Phụ huynh đồng hành</p>
                <p className="text-sm text-gray-500">Dễ dàng tải tài liệu, hình ảnh tô màu tại nhà.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CameraAIPage = () => (
  <div className="flex-1 bg-navy text-white flex flex-col md:flex-row">
    <div className="md:w-1/2 p-12 flex flex-col justify-center">
      <h2 className="text-sm font-bold text-edukid-orange uppercase tracking-widest mb-4">SẢN PHẨM 04</h2>
      <h3 className="text-4xl font-extrabold mb-8">Camera AI Thông Minh</h3>
      <div className="space-y-6">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h4 className="font-bold text-edukid-orange mb-2">Nhận diện khuôn mặt tự động</h4>
          <p className="text-sm text-blue-100/60">Khi học sinh vào/ra lớp hoặc khu vực trường, hệ thống tự động ghi nhận và báo cáo.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h4 className="font-bold text-edukid-orange mb-2">Điểm danh Real-time</h4>
          <p className="text-sm text-blue-100/60">Giảm thao tác thủ công, giúp giáo viên tập trung vào chuyên môn giảng dạy.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h4 className="font-bold text-edukid-orange mb-2">An ninh tuyệt đối</h4>
          <p className="text-sm text-blue-100/60">Cảnh báo người lạ xâm nhập và giám sát sĩ số theo thời gian thực.</p>
        </div>
      </div>
    </div>
    <div className="md:w-1/2 relative">
      <img 
        src="https://picsum.photos/seed/camera-ai-real/800/1200" 
        alt="AI Camera Real" 
        className="w-full h-full object-cover opacity-60"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 border-2 border-edukid-orange rounded-full flex items-center justify-center animate-pulse">
          <div className="w-48 h-48 border border-edukid-orange/50 rounded-full flex items-center justify-center">
            <Camera size={48} className="text-edukid-orange" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AppParentPage = () => (
  <div className="flex-1 p-8 md:p-16 bg-white overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-navy uppercase tracking-widest mb-4">SẢN PHẨM 05</h2>
        <h3 className="text-4xl font-extrabold text-navy mb-4">App Học Cùng AI</h3>
        <p className="text-gray-500">“Đồng hành cùng con mỗi ngày” - Dành riêng cho phụ huynh mầm non.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <div className="w-72 bg-gray-900 rounded-[3rem] p-3 shadow-2xl z-10">
            <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
              <img src="https://picsum.photos/seed/app-parent/400/800" alt="App Parent" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-64 h-64 bg-edukid-orange/10 rounded-full blur-3xl -z-10" />
        </div>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="p-3 bg-navy text-white rounded-xl h-fit"><Smartphone size={24} /></div>
            <div>
              <p className="font-bold text-navy text-lg">Theo dõi toàn diện</p>
              <p className="text-gray-600">Cập nhật chỉ số chiều cao, cân nặng, BMI và tình trạng sức khỏe tổng quan của bé.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 bg-navy text-white rounded-xl h-fit"><BookOpen size={24} /></div>
            <div>
              <p className="font-bold text-navy text-lg">Sổ Bé Ngoan & Sức Khỏe</p>
              <p className="text-gray-600">Xem nhận xét hằng ngày, đánh giá tuần/tháng kèm hình ảnh và danh hiệu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 bg-navy text-white rounded-xl h-fit"><Globe size={24} /></div>
            <div>
              <p className="font-bold text-navy text-lg">Truy cập nhanh</p>
              <p className="text-gray-600">Điểm danh Camera AI, Học liệu số và tin nhắn từ nhà trường mọi lúc mọi nơi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SoBeNgoanPage = () => (
  <div className="flex-1 p-8 md:p-16 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">SẢN PHẨM 03</h2>
        <h3 className="text-4xl font-extrabold text-navy mb-4">Sổ Bé Ngoan & Sổ Sức Khỏe</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h4 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
            <Award className="text-edukid-orange" /> Sổ Bé Ngoan
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Công cụ theo dõi và ghi nhận sự phát triển hằng ngày của trẻ về hành vi, kỹ năng, thói quen sinh hoạt và sự tiến bộ trong học tập – vui chơi.
          </p>
          <ul className="space-y-3">
            {['Cập nhật nhận xét hằng ngày', 'Đánh giá tuần/tháng kèm hình ảnh', 'Danh hiệu "Bé ngoan" khích lệ trẻ'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <CheckCircle2 size={14} className="text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h4 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
            <ShieldCheck className="text-blue-500" /> Sổ Sức Khỏe
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Số hóa toàn diện hồ sơ sức khỏe, giúp nhà trường và phụ huynh theo dõi thể lực, chỉ số phát triển, tiền sử bệnh và lịch sử tiêm chủng.
          </p>
          <ul className="space-y-3">
            {['Theo dõi thể lực định kỳ (BMI)', 'Quản lý lịch sử tiêm chủng', 'Lưu trữ tiền sử bệnh & dị ứng'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <CheckCircle2 size={14} className="text-blue-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <img src="https://picsum.photos/seed/health-record/800/400" className="rounded-3xl shadow-lg max-w-full" alt="Health Record Interface" referrerPolicy="no-referrer" />
      </div>
    </div>
  </div>
);

const BackCoverPage = () => (
  <div className="flex-1 bg-navy text-white p-8 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
    </div>
    
    <div className="z-10 max-w-2xl">
      <div className="mb-12 flex justify-center">
        <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-xl">
          <img 
            src="https://storage.googleapis.com/mumbai_ai_studio_public_assets/ais-dev-4lw3y4gw2kqwmeac7fq7gg-719918344713/input_file_5.png" 
            alt="Edukid Logo" 
            className="w-full h-full object-contain mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-8 font-display">CÔNG TY CỔ PHẦN GIẢI PHÁP PHẦN MỀM VIỆT NAM AI</h2>
      <p className="text-lg text-blue-200/60 mb-12 italic">
        “Kết nối công nghệ, nâng tầm tri thức”
      </p>
      
      <div className="grid grid-cols-1 gap-6 text-left bg-white/5 p-8 rounded-3xl border border-white/10 mb-12">
        <div className="flex items-start gap-4">
          <MapPin className="text-edukid-orange shrink-0" size={24} />
          <p className="text-sm">Lầu 2 B10, Tòa nhà Phú Mã Dương, Khu TTTM Tài chính Quốc tế Phú Mỹ Hưng, số 79/3 Hoàng Văn Thái, Phường Tân Mỹ, Quận 7, TP. Hồ Chí Minh</p>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="text-edukid-orange shrink-0" size={24} />
          <p className="text-sm">0902327276</p>
        </div>
        <div className="flex items-center gap-4">
          <Globe className="text-edukid-orange shrink-0" size={24} />
          <p className="text-sm">www.vnaisoft.com</p>
        </div>
      </div>
      
      <p className="text-xs text-blue-200/30">© 2026 Vietnam AI. All rights reserved.</p>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const pages = [
    <CoverPage />,
    <IntroPage />,
    <PartnersPage />,
    <CertificationsPage />,
    <ProductCataloguePage />,
    <SoDangBoPage />,
    <HocLieuSoPage />,
    <SoBeNgoanPage />,
    <CameraAIPage />,
    <AppParentPage />,
    <BackCoverPage />
  ];

  const paginate = (newDirection: number) => {
    const newPage = currentPage + newDirection;
    if (newPage >= 0 && newPage < pages.length) {
      setDirection(newDirection);
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-200 flex items-center justify-center overflow-hidden font-sans selection:bg-edukid-orange selection:text-white">
      {/* Book Container */}
      <div className="relative w-full h-full md:w-[95vw] md:h-[90vh] bg-white shadow-2xl md:rounded-[2rem] overflow-hidden flex flex-col">
        
        {/* Navigation Header */}
        <div className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
          <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100 pointer-events-auto">
            <span className="text-sm font-black text-navy tracking-tighter">EDUKID</span>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100 pointer-events-auto flex items-center gap-4">
            <span className="text-xs font-bold text-gray-400">TRANG {currentPage + 1} / {pages.length}</span>
            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-edukid-orange"
                animate={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Pages Area */}
        <div className="flex-1 relative">
          {pages.map((page, index) => (
            <PageWrapper key={index} isActive={index === currentPage} direction={direction}>
              {page}
            </PageWrapper>
          ))}
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center gap-4 pointer-events-none">
          <button 
            onClick={() => paginate(-1)}
            disabled={currentPage === 0}
            className={`p-4 rounded-full bg-white shadow-xl border border-gray-100 pointer-events-auto transition-all ${currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
          >
            <ChevronLeft className="text-navy" size={24} />
          </button>
          <button 
            onClick={() => paginate(1)}
            disabled={currentPage === pages.length - 1}
            className={`p-4 rounded-full bg-white shadow-xl border border-gray-100 pointer-events-auto transition-all ${currentPage === pages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
          >
            <ChevronRight className="text-navy" size={24} />
          </button>
        </div>

        {/* Book Spine Shadow (Desktop only) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-black/5 z-40 pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
      </div>
      
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#001F3F_0%,_transparent_70%)]" />
      </div>
    </div>
  );
}
