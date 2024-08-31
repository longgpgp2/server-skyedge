package SkyEdge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import SkyEdge.model.Voucher;
import SkyEdge.repository.VoucherRepository;

@Service
public class VoucherService {

    @Autowired
    private VoucherRepository voucherRepository;

    public List<Voucher> getAllVouchers() {
        return voucherRepository.findAll();
    }

    public Voucher findByVoucherId(int id) throws NotFoundException {
        return voucherRepository.findById(id).get();
    }

    public Optional<Voucher> getVoucherById(int id) {
        return voucherRepository.findById(id);
    }

    public Long getVoucherCount() {
        return voucherRepository.countVouchers();
    }

    public Voucher saveVoucher(Voucher voucher) {
        return voucherRepository.save(voucher);
    }

    public void deleteVoucher(int id) {
        voucherRepository.deleteById(id);
    }

    public Optional<Voucher> findVoucherByVoucherCode(String code) {
        return voucherRepository.findByCode(code);
    }

    public List<Voucher> findAll() {
        return voucherRepository.findAll();
    }

    public void save(Voucher newVoucher) {
        voucherRepository.save(newVoucher);
    }

    public List<Voucher> findByNameContainingIgnoreCase(String query) {
        return voucherRepository.findByNameContainingIgnoreCase(query);
    }

    public Optional<Voucher> findById(int id) {
        return voucherRepository.findById(id);
    }

    public void delete(Voucher voucher) {
        voucherRepository.delete(voucher);
    }
}