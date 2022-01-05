import 'package:flutter/material.dart';

class MyAboutMe extends StatelessWidget {
  const MyAboutMe({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor,
        borderRadius: const BorderRadius.only(
          bottomLeft: Radius.circular(10),
          bottomRight: Radius.circular(10),
        ),
      ),
      child: const Center(
        child: SizedBox(
          width: 400,
          child: Padding(
            padding: EdgeInsets.all(16),
            child: SelectableText(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu nibh, sagittis vel sem nec, dictum facilisis elit. Phasellus quis semper mi, ut laoreet odio. Phasellus id sem dolor. Integer quis mi vitae orci pharetra viverra. Sed nibh dolor, suscipit imperdiet mauris vitae, venenatis lacinia quam.',
              textAlign: TextAlign.center,
            ),
          ),
        ),
      ),
    );
  }
}
