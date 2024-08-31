package SkyEdge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import SkyEdge.model.Subscriber;
import SkyEdge.repository.SubscriberRepository;

@Service
public class SubscriberService {

    @Autowired
    private SubscriberRepository subscriberRepository;

    public List<Subscriber> getAllSubscribers() {
        return subscriberRepository.findAll();
    }

    public Subscriber findBySubscriberId(int id) throws NotFoundException {
        return subscriberRepository.findById(id).get();
    }

    public Optional<Subscriber> getSubscriberById(int id) {
        return subscriberRepository.findById(id);
    }

    public Long getSubscriberCount() {
        return subscriberRepository.countSubscribers();
    }

    public Subscriber saveSubscriber(Subscriber subscriber) {
        return subscriberRepository.save(subscriber);
    }

    public void deleteSubscriber(int id) {
        subscriberRepository.deleteById(id);
    }

    public Optional<Subscriber> findById(int id) {
        return subscriberRepository.findById(id);
    }

    public void delete(Subscriber subscriber) {
        subscriberRepository.delete(subscriber);
    }

    public List<Subscriber> findByEmailContainingIgnoreCase(String query) {
        return subscriberRepository.findByEmailContainingIgnoreCase(query);
    }
}