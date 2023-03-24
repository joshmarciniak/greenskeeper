package com.jlmar.greenskeepercore.service.impl;

import com.jlmar.greenskeepercore.model.Account;
import com.jlmar.greenskeepercore.repository.AccountRepository;
import com.jlmar.greenskeepercore.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    AccountRepository accountRepository;

    @Override
    public void createAccount(Account account) {
        accountRepository.save(account);
    }
}
