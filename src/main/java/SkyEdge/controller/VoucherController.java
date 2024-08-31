package SkyEdge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.User;
import SkyEdge.model.Voucher;
import SkyEdge.model.VoucherDto;
import SkyEdge.service.VoucherService;
import jakarta.validation.Valid;

@Controller
public class VoucherController {
    @Autowired
    private VoucherService voucherService;

    @GetMapping("/admin/voucher")
    public String listVouchers(Model model) {

        List<Voucher> vouchers = voucherService.getAllVouchers();
        model.addAttribute("vouchers", vouchers);

        Long voucherCount = voucherService.getVoucherCount();
        model.addAttribute("voucherCount", voucherCount);

        return "admin/voucher/admin-voucher";
    }

    @GetMapping("/admin/voucher/add")
    public String addVoucher(Model model) {
        VoucherDto voucherDto = new VoucherDto();
        model.addAttribute("voucherDto", voucherDto);
        return "admin/voucher/admin-addvoucher";
    }

    @PostMapping("/admin/voucher/add")
    public String addNewVoucher(@Valid @ModelAttribute VoucherDto voucherDto, Voucher voucher, BindingResult result,
            @AuthenticationPrincipal User user) {

        Voucher newVoucher = new Voucher();
        newVoucher.setName(voucherDto.getName());
        newVoucher.setIcon(voucherDto.getIcon());
        newVoucher.setCode(voucherDto.getCode());
        newVoucher.setDiscount(voucherDto.getDiscount());
        newVoucher.setType(voucherDto.getType());
        newVoucher.setStock(voucherDto.getStock());
        newVoucher.setCode(voucherDto.getCode());
        newVoucher.setDiscount(voucherDto.getDiscount());
        voucherService.save(newVoucher);
        return "redirect:/admin/voucher";
    }

    @GetMapping("/admin/voucher/search")
    public String searchVoucher(@RequestParam("query") String query, Model model) {
        List<Voucher> vouchers = voucherService.findByNameContainingIgnoreCase(query);
        System.out.println(vouchers);
        model.addAttribute("vouchers", vouchers);
        Long voucherCount = voucherService.getVoucherCount();
        model.addAttribute("voucherCount", voucherCount);
        return "admin/voucher/admin-voucher";
    }

    @GetMapping("/admin/voucher/delete")
    public String deleteVoucher(@RequestParam int id) {
        if (voucherService.findById(id).isPresent()) {
            Voucher voucher = voucherService.findById(id).get();
            voucherService.delete(voucher);
        }
        return "redirect:/admin/voucher";
    }

    @GetMapping("/admin/voucher/edit")
    public String showUpdateVoucher(Model model, @RequestParam int id) {
        try {
            Voucher voucher = voucherService.findById(id).get();
            model.addAttribute("voucher", voucher);

            VoucherDto voucherDto = new VoucherDto();
            voucherDto.setIcon(voucher.getIcon());
            voucherDto.setCode(voucher.getCode());
            voucherDto.setName(voucher.getName());
            voucherDto.setDiscount(voucher.getDiscount());
            voucherDto.setType(voucher.getType());
            voucherDto.setStock(voucher.getStock());
            model.addAttribute("voucherDto", voucherDto);
        } catch (Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
            return "redirect:/admin/voucher";
        }
        return "admin/voucher/admin-updatevoucher";
    }

    @PostMapping("/admin/voucher/edit")
    public String updateVoucher(Model model, @RequestParam int id, @Valid @ModelAttribute VoucherDto voucherDto,
            BindingResult result) {
        try {
            Voucher voucher = voucherService.findById(id).get();
            model.addAttribute("voucher", voucher);

            voucher.setIcon(voucherDto.getIcon());
            voucher.setCode(voucherDto.getCode());
            voucher.setName(voucherDto.getName());
            voucher.setDiscount(voucherDto.getDiscount());
            voucher.setType(voucherDto.getType());
            voucher.setStock(voucherDto.getStock());
            voucherService.save(voucher);
        } catch (Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
        }

        return "redirect:/admin/voucher";
    }
}
