
    const text = `Hunonic là công ty hàng đầu Việt Nam trong lĩnh vực nghiên cứu, sản xuất và cung cấp các giải pháp nhà thông minh, tự động hóa. 
    Với sứ mệnh “Mang đến cuộc sống tiện nghi và thông minh cho mọi nhà”, Hunonic không ngừng nỗ lực phát triển các sản phẩm, dịch vụ chất lượng cao, đáp ứng mọi nhu cầu của khách hàng.

    Các sản phẩm thiết bị điện thông minh của Hunonic hiện đã rất đa dạng về mẫu mã, chủng loại. Có thể kể đến như là các công tắc thông minh, công tắc cảm ứng, ổ cắm thông minh, điều khiển tivi điều hòa qua điện thoại, công tắc điều khiển cửa cuốn qua điện thoại, cổng tự động, rèm tự động, cầu dao thông minh, các sản phẩm dành cho nông nghiệp thông minh,…

    Hunonic sở hữu đội ngũ nhân viên trẻ trung, năng động, sáng tạo và tâm huyết, cùng hệ thống nhà máy, dây chuyền sản xuất hiện đại, đáp ứng tiêu chuẩn quốc tế.`;

    const introTextElement = document.getElementById('intro-text');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            introTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 1); // Điều chỉnh tốc độ gõ tại đây (30ms cho mỗi ký tự)
        }
    }

    typeText();

